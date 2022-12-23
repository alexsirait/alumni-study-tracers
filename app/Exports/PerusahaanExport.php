<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class PerusahaanExport implements FromView, ShouldAutoSize
{
    public function view(): View
    {
        $data['user_perusahaan'] = User::role('perusahaan')->get();
        return view('Export.UserPerusahaan', $data);
    }
}
