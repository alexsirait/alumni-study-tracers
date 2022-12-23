<?php

namespace App\Http\Controllers;

use App\Exports\KuesionerAlumniExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniABTExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniAKExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniAKMExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniANExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniELExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniEMExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniGEExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniIFExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniINExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniLPIExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniMEExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniMJExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniMKExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniPKKExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniPPUExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniRBExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniRKSExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniRPEExport;
use App\Exports\KuesionerAlumniJur\KuesionerAlumniRPLExport;
use App\Exports\KuesionerPerusahaanExport;
use App\Models\KuesionerAlumni;
use App\Models\KuesionerPerusahaan;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportKuesionerController extends Controller
{
    public function index()
    {
        return inertia('ExportKuesioner');
    }

    public function kuesionerAlumniExport()
    {
        return Excel::download(new KuesionerAlumniExport, 'Kuesioner Alumni.xlsx');
    }

    public function kuesionerAlumniIFExport()
    {
        return Excel::download(new KuesionerAlumniIFExport, 'Kuesioner Alumni Teknik Informatika.xlsx');
    }

    public function kuesionerAlumniABTExport()
    {
        return Excel::download(new KuesionerAlumniABTExport, 'Kuesioner Alumni Administrasi Bisnis Terapan.xlsx');
    }

    public function kuesionerAlumniAKExport()
    {
        return Excel::download(new KuesionerAlumniAKExport, 'Kuesioner Alumni Akuntansi.xlsx');
    }

    public function kuesionerAlumniAKMExport()
    {
        return Excel::download(new KuesionerAlumniAKMExport, 'Kuesioner Alumni Akuntansi Manajerial.xlsx');
    }

    public function kuesionerAlumniANExport()
    {
        return Excel::download(new KuesionerAlumniANExport, 'Kuesioner Alumni Animasi.xlsx');
    }

    public function kuesionerAlumniELExport()
    {
        return Excel::download(new KuesionerAlumniELExport, 'Kuesioner Alumni Teknik Elektronika.xlsx');
    }

    public function kuesionerAlumniEMExport()
    {
        return Excel::download(new KuesionerAlumniEMExport, 'Kuesioner Alumni Teknik Elektronika Manufaktur.xlsx');
    }

    public function kuesionerAlumniGEExport()
    {
        return Excel::download(new KuesionerAlumniGEExport, 'Kuesioner Alumni Teknik Geomatika.xlsx');
    }

    public function kuesionerAlumniINExport()
    {
        return Excel::download(new KuesionerAlumniINExport, 'Kuesioner Alumni Teknik Instrumentasi.xlsx');
    }

    public function kuesionerAlumniLPIExport()
    {
        return Excel::download(new KuesionerAlumniLPIExport, 'Kuesioner Alumni Logistik Perdagangan Internasional.xlsx');
    }

    public function kuesionerAlumniMEExport()
    {
        return Excel::download(new KuesionerAlumniMEExport, 'Kuesioner Alumni Teknik Mesin.xlsx');
    }

    public function kuesionerAlumniMJExport()
    {
        return Excel::download(new KuesionerAlumniMJExport, 'Kuesioner Alumni Multimedia dan Jaringan.xlsx');
    }

    public function kuesionerAlumniMKExport()
    {
        return Excel::download(new KuesionerAlumniMKExport, 'Kuesioner Alumni Teknik Mekatronika.xlsx');
    }

    public function kuesionerAlumniPKKExport()
    {
        return Excel::download(new KuesionerAlumniPKKExport, 'Kuesioner Alumni Teknik Perencanaan dan Konstruksi Kapal.xlsx');
    }

    public function kuesionerAlumniPPUExport()
    {
        return Excel::download(new KuesionerAlumniPPUExport, 'Kuesioner Alumni Teknik Perawatan Pesawat Udara.xlsx');
    }

    public function kuesionerAlumniRBExport()
    {
        return Excel::download(new KuesionerAlumniRBExport, 'Kuesioner Alumni Teknik Robotika.xlsx');
    }

    public function kuesionerAlumniRKSExport()
    {
        return Excel::download(new KuesionerAlumniRKSExport, 'Kuesioner Alumni Rekayasa Keamanan Siber.xlsx');
    }

    public function kuesionerAlumniRPEExport()
    {
        return Excel::download(new KuesionerAlumniRPEExport, 'Kuesioner Alumni Teknologi Rekayasa Pembangkit Energi.xlsx');
    }

    public function kuesionerAlumniRPLExport()
    {
        return Excel::download(new KuesionerAlumniRPLExport, 'Kuesioner Alumni Rekayasa Perangkat Lunak.xlsx');
    }

    public function kuesionerAlumniExportSelect()
    {
        return inertia('ExportKuesionerSelect');
    }

    public function kuesionerPerusahaanExport()
    {
        return Excel::download(new KuesionerPerusahaanExport, 'kuesionerPerusahaan.xlsx');
    }
}
