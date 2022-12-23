<table>
    <thead>
        <tr>
            <th style="text-align:center;border:1px solid black;"><b>Nama</b></th>
            <th style="text-align:center;border:1px solid black;"><b>NIM</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Perusahaan</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Posisi</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Durasi</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Pendapatan</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($riwayat_kerja as $riwayatKerja)
        <tr>
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->name }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->identifier }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->perusahaan }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->posisi }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->durasi }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $riwayatKerja->pendapatan }}</td>
        </tr>
        @endforeach
    </tbody>
</table>