<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;

class PerusahaanImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $perusahaan = new User([
            'identifier' => $row[0],
            'name' => $row[1],
            'email' => $row[2],
            'telp' => $row[3],
            'address' => $row[4],
        ]);
        $perusahaan->assignRole('perusahaan');

        return $perusahaan;
    }
}
