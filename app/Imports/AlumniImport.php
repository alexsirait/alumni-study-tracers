<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;

class AlumniImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $alumni = new User([
            'identifier' => $row[0],
            'name' => $row[1],
            'prodi' => $row[2],
            'email' => $row[3],
            'telp' => $row[4],
            'kelamin' => $row[5],
            'ipk' => $row[6],
        ]);
        $alumni->assignRole('alumni');

        return $alumni;
    }
}
