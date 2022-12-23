<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class AlumniExport implements FromView, ShouldAutoSize
{
    public function view(): View
    {
        $data['user_alumni'] = User::role('alumni')->get();
        return view('Export.UserAlumni', $data);
    }
}
