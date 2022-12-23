<?php

namespace App\Exports;

use App\Models\RiwayatKerja;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class RiwayatKerjaExport implements FromView, ShouldAutoSize
{
    public function view(): View
    {
        $data['riwayat_kerja'] = RiwayatKerja::orderBy('identifier', 'ASC')->get();
        return view('Export.RiwayatKerja', $data);
    }
}
