<table>
    <thead>
        <tr>
            <th style="text-align:center;border:1px solid black;"><b>NIM</b></th>
            <th style="text-align:center;border:1px solid black;"><b>Nama</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Prodi</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Email</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Telp</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>Kelamin</b></th> 
            <th style="text-align:center;border:1px solid black;"><b>IPK</b></th> 
        </tr>
    </thead>
    <tbody>
        @foreach($user_alumni as $user)
        <tr>
            <td style="text-align:left;border:1px solid black;">{{ $user->identifier }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $user->name }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $user->prodi }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $user->email }}</td>
            <td style="text-align:left;border:1px solid black;">{{ $user->telp }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $user->kelamin }}</td> 
            <td style="text-align:left;border:1px solid black;">{{ $user->ipk }}</td> 
        </tr>
        @endforeach
    </tbody>
</table>