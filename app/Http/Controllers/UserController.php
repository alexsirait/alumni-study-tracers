<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlumniCollection;
use App\Http\Resources\PerusahaanCollection;
use App\Models\User;
use App\Exports\AlumniExport;
use App\Imports\AlumniImport;
use App\Exports\PerusahaanExport;
use App\Imports\PerusahaanImport;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function indexAlumni(Request $request)
    {
        $request->validate([
            'direction' => ['in:asc,desc'],
            'field' => ['in:name,identifier'],
        ]);

        $query = User::query();

        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%')
            ->orWhere('identifier', 'like', '%' . $request->search . '%');
        }

        if ($request->has(['field', 'direction'])){
            $query->orderBy($request->field, $request->direction);
        }

        $users = new AlumniCollection($query->latest()->role('alumni')->paginate($request->load));

        return inertia('Alumnis/Index', ['users' => $users]);
    }

    public function indexPerusahaan(Request $request)
    {
        $request->validate([
            'direction' => ['in:asc,desc'],
            'field' => ['in:name,identifier'],
        ]);

        $query = User::query();

        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%')
            ->orWhere('identifier', 'like', '%' . $request->search . '%');
        }

        if ($request->has(['field', 'direction'])){
            $query->orderBy($request->field, $request->direction);
        }

        $users = new PerusahaanCollection($query->latest()->role('perusahaan')->paginate($request->load));

        return inertia('Perusahaans/Index', ['users' => $users]);
    }

    public function createAlumni()
    {
        return inertia('Alumnis/Create');
    }

    public function createPerusahaan()
    {
        return inertia('Perusahaans/Create');
    }

    public function storeAlumni(Request $request)
    {
        $userCreate = $request->validate([
            'identifier' => ['required', 'numeric', 'unique:users,identifier'],
            'name' => ['required'],
            'prodi' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'kelamin' => ['required'],
            'ipk' => ['required'],
        ]);

        $user = User::create($userCreate);
        $user->assignRole('alumni');

        return redirect(route('alumni.index'))->with([
            'type' => 'success',
            'message' => 'Data has been created.',
        ]);
    }

    public function storePerusahaan(Request $request)
    {
        $userCreate = $request->validate([
            'identifier' => ['required', 'unique:users,identifier'],
            'name' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'address' => ['required'],
        ]);

        $user = User::create($userCreate);
        $user->assignRole('perusahaan');

        return redirect(route('perusahaan.index'))->with([
            'type' => 'success',
            'message' => 'Data has been created.',
        ]);
    }

    public function showAlumni(User $user)
    {
        return inertia('Alumnis/Show', [
            'user' => $user,
        ]);
    }

    public function showPerusahaan(User $user)
    {
        return inertia('Perusahaans/Show', [
            'user' => $user,
        ]);
    }

    public function editAlumni(User $user)
    {
        return inertia('Alumnis/Edit', [
            'user' => $user,
        ]);
    }

    public function editPerusahaan(User $user)
    {
        return inertia('Perusahaans/Edit', [
            'user' => $user,
        ]);
    }

    public function updateAlumni(Request $request, User $user)
    {
        $userUpdate = $request->validate([
            'identifier' => 'required|numeric|unique:users,identifier,'.$user->id,
            'name' => ['required'],
            'prodi' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'kelamin' => ['required'],
            'ipk' => ['required'],
        ]);

        $user->update($userUpdate);

        return redirect(route('alumni.index'))->with([
            'type' => 'success',
            'message' => 'Data has been updated.',
        ]);
    }

    public function updatePerusahaan(Request $request, User $user)
    {
        $userUpdate = $request->validate([
            'identifier' => 'required|unique:users,identifier,'.$user->id,
            'name' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'address' => ['required'],
        ]);

        $user->update($userUpdate);

        return redirect(route('perusahaan.index'))->with([
            'type' => 'success',
            'message' => 'Data has been updated.',
        ]);
    }

    public function destroyAlumni(User $user)
    {
        $user->delete();
        return redirect(route('alumni.index'))->with([
            'type' => 'success',
            'message' => 'Data has been deleted.',
        ]);
    }

    public function destroyPerusahaan(User $user)
    {
        $user->delete();
        return redirect(route('perusahaan.index'))->with([
            'type' => 'success',
            'message' => 'Data has been deleted.',
        ]);
    }

    public function userAlumniExport()
    {
        return Excel::download(new AlumniExport, 'alumni.xlsx');
    }

    public function userPerusahaanExport()
    {
        return Excel::download(new PerusahaanExport, 'perusahaan.xlsx');
    }

    public function createImportAlumni()
    {
        return view('Import/ImportAlumni');
    }

    public function storeImportAlumni(Request $request)
    {
        $file = $request->file('file');
        Excel::import(new AlumniImport, $file);
        return redirect(route('alumni.index'))->with([
            'type' => 'success',
            'message' => 'Data has been imported.',
        ]);
    }

    public function createImportPerusahaan()
    {
        return view('Import/ImportPerusahaan');
    }

    public function storeImportPerusahaan(Request $request)
    {
        $file = $request->file('file');
        Excel::import(new PerusahaanImport, $file);
        return redirect(route('perusahaan.index'))->with([
            'type' => 'success',
            'message' => 'Data has been imported.',
        ]);
    }

    public function alumniAllDelete(Request $request)
    {
        User::role('alumni')->delete();
        return redirect(route('alumni.index'))->with([
            'type' => 'success',
            'message' => 'Alumni user has been deleted.',
        ]);
    }

    public function perusahaanAllDelete(Request $request)
    {
        User::role('perusahaan')->delete();
        return redirect(route('perusahaan.index'))->with([
            'type' => 'success',
            'message' => 'Perusahaan user has been deleted.',
        ]);
    }

}
