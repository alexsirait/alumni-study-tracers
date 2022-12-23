<?php

namespace App\Exports;

use App\Models\KuesionerPerusahaan;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class KuesionerPerusahaanExport implements FromView, WithDrawings, ShouldAutoSize
{
    public function view(): View
    {
        $data['laporan_kuesioner_perusahaan'] = KuesionerPerusahaan::all();
        return view('Export.LaporanKuesionerPerusahaan', $data);
    }

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('This is my logo');
        $drawing->setPath(public_path('images/polibatamLogo.png'));
        $drawing->setHeight(60);
        $drawing->setCoordinates('A1');

        return $drawing;
    }
}
