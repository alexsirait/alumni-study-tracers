<?php

namespace App\Http\Controllers;

use App\Exports\RiwayatKerjaExport;
use App\Models\RiwayatKerja;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class RiwayatKerjaController extends Controller
{
    public function index()
    {
        return inertia('Alumnis/RiwayatKerjaIndex', [
            'riwayat' => RiwayatKerja::where('user_id', auth()->user()->id)->latest()->paginate(5)
        ]);
    }

    public function show(RiwayatKerja $riwayatKerja)
    {
        if($riwayatKerja->user_id != auth()->user()->id){
            return redirect(route('riwayatkerja.index'));
        }
        return inertia('Alumnis/RiwayatKerjaShow', [
            'riwayatKerja' => $riwayatKerja,
        ]);
    }

    public function edit(RiwayatKerja $riwayatKerja)
    {
        if($riwayatKerja->user_id != auth()->user()->id){
            return redirect(route('riwayatkerja.index'));
        }
        return inertia('Alumnis/RiwayatKerjaEdit', [
            'riwayatKerja' => $riwayatKerja,
        ]);
    }

    public function update(Request $request, RiwayatKerja $riwayatKerja)
    {
        $riwayatKerjaUpdate = $request->validate([
            'perusahaan' => ['required'],
            'posisi' => ['required'],
            'durasi' => ['required'],
            'pendapatan' => ['required'],
        ]);

        $riwayatKerja->update($riwayatKerjaUpdate);

        return redirect(route('riwayatkerja.index'))->with([
            'type' => 'success',
            'message' => 'Data has been updated.',
        ]);
    }

    public function destroy(RiwayatKerja $riwayatKerja)
    {
        $riwayatKerja->delete();
        return redirect(route('riwayatkerja.index'))->with([
            'type' => 'success',
            'message' => 'Data has been deleted.',
        ]);
    }

    public function create()
    {
        return inertia('Alumnis/RiwayatKerjaCreate');
    }

    public function store(Request $request)
    {
        $riwayatKerjaStore = $request->validate([
            'perusahaan' => ['required'],
            'posisi' => ['required'],
            'durasi' => ['required'],
            'pendapatan' => ['required'],
        ]);
        $riwayatKerjaStore['identifier'] = auth()->user()->identifier;
        $riwayatKerjaStore['name'] = auth()->user()->name;

        $riwayat = $request->user()->riwayatkerjas()->create($riwayatKerjaStore);

        return redirect(route('riwayatkerja.index'))->with([
            'type' => 'success',
            'message' => 'Data has been created.',
        ]);
    }

    public function exportExcelRiwayatKerja()
    {
        return Excel::download(new RiwayatKerjaExport, 'riwayatKerjaAlumni.xlsx');
    }

    public function exportRiwayatKerja()
    {
        return inertia('ExportRiwayatKerja');
    }
}
