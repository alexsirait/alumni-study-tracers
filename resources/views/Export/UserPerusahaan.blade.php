<table>
    <thead>
        <tr>
            <th style="text-align:center;border:1px solid black;"><b>ID Perusahaan</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Nama</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Email</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Telp</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Address</b></th> 
        </tr>
    </thead>
    <tbody>
        @foreach($user_perusahaan as $user)
        <tr>
            <td style="text-align:left;border:1px solid black;">{{ $user->identifier }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $user->name }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $user->email }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $user->telp }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $user->address }}</td>
        </tr>
        @endforeach
    </tbody>
</table>