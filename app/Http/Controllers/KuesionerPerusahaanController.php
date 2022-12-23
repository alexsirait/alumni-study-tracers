<?php

namespace App\Http\Controllers;

use App\Exports\KuesionerPerusahaanExport;
use App\Models\KuesionerAlumni;
use App\Models\KuesionerPerusahaan;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class KuesionerPerusahaanController extends Controller
{
    public function index()
    {
        $userLoginKuesioner = KuesionerPerusahaan::where('user_id', auth()->user()->id)->latest()->first();
        return inertia('Kuesioners/StartPerusahaan', [
            'kuesionerPerusahaan' => $userLoginKuesioner
        ]);
    }

    public function store(Request $request)
    {
        $user = $request->user()->kuesionerperusahaans()->create();
        return redirect(route('kuesioner.perusahaan.edit', $user->id));
    }

    public function edit(KuesionerPerusahaan $kuesionerPerusahaan)
    {
        $dataKuesioner = $kuesionerPerusahaan->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerPerusahaan) {
            return redirect(route('kuesioner.perusahaan.index'));
        }
        return inertia('Kuesioners/Perusahaan', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update(Request $request, KuesionerPerusahaan $kuesionerPerusahaan)
    {
        $kuesionerPerusahaanUpdate = $request->validate([
            'a1' => ['required'],
            'a2' => ['required'],
            'a3' => ['required', 'email'],
            'a4' => ['required', 'numeric'],
            'a5' => ['required'],
        ]);
        $kuesionerPerusahaan->update($kuesionerPerusahaanUpdate);
        return redirect(route('kuesioner.perusahaan.edit2', $kuesionerPerusahaan->id));
    }

    public function edit2(KuesionerPerusahaan $kuesionerPerusahaan)
    {
        $dataKuesioner = $kuesionerPerusahaan->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerPerusahaan) {
            return redirect(route('kuesioner.perusahaan.index'));
        }
        return inertia('Kuesioners/Perusahaan2', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update2(Request $request, KuesionerPerusahaan $kuesionerPerusahaan)
    {
        $kuesionerPerusahaanUpdate = $request->validate([
            'b1' => ['required'],
            'b2' => ['required'],
            'b3' => ['required'],
            'b4' => ['required'],
            'b5' => ['required'],
            'b6' => ['required'],
            'b7' => ['required'],
            'b8' => ['required'],
            'b9' => ['required'],
            'b10' => ['required'],
            'b11' => ['required'],
            'b12' => ['required'],
            'b13' => ['required'],
            'b14' => ['required'],
            'b15' => ['required'],
            'b16' => ['required'],
            'b17' => ['required'],
            'b18' => ['required'],
            'b19' => ['required'],
            'b20' => ['required'],
            'b21' => ['nullable'],
            'b22' => ['nullable'],
            'b23' => ['nullable'],
            'b24' => ['nullable'],
            'b25' => ['nullable'],
            'b26' => ['nullable'],
            'b27' => ['required'],
            'b28' => ['required'],
            'b29' => ['nullable'],
            'b30' => ['nullable'],
            'b31' => ['nullable'],
            'b32' => ['required'],
            'b33' => ['required'],
        ]);
        $kuesionerPerusahaan->update($kuesionerPerusahaanUpdate);
        return redirect(route('dashboard', $kuesionerPerusahaan->id))->with(['type2' => '1']);
    }
}
