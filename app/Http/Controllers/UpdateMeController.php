<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UpdateMeController extends Controller
{
    public function editAlumni(User $user)
    {
        if ($user->where('identifier', auth()->user()->identifier)->first() != $user) {
            return redirect(route('dashboard'));
        }
        return inertia('Alumnis/EditMe', [
            'user' => $user,
        ]);
    }

    public function editPerusahaan(User $user)
    {
        if ($user->where('identifier', auth()->user()->identifier)->first() != $user) {
            return redirect(route('dashboard'));
        }
        return inertia('Perusahaans/EditMe', [
            'user' => $user,
        ]);
    }

    public function updateAlumni(Request $request, User $user)
    {
        $userUpdate = $request->validate([
            'identifier' => ['required'],
            'name' => ['required'],
            'prodi' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'kelamin' => ['required'],
            'ipk' => ['required'],
        ]);

        $user->update($userUpdate);

        return redirect(route('dashboard'))->with([
            'type' => 'success',
            'message' => 'Data has been updated.',
        ]);
    }

    public function updatePerusahaan(Request $request, User $user)
    {
        $userUpdate = $request->validate([
            'identifier' => ['required'],
            'name' => ['required'],
            'email' => ['required', 'email'],
            'telp' => ['required', 'numeric'],
            'address' => ['required'],
        ]);

        $user->update($userUpdate);

        return redirect(route('dashboard'))->with([
            'type' => 'success',
            'message' => 'Data has been updated.',
        ]);
    }
}
