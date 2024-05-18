<template>
    <div class="container max-w-3xl px-4 mx-auto sm:px-8 table">
        <div class="py-8">
            <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
                <h2 class="text-4xl leading-tight" style="color:black">
                    Patient Queue
                </h2>
            </div>

            <hr class="line"/> 

            <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 table">
                <div class="inline-block min-w-full overflow-hidden shadow table">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Patient ID
                                </th>
                                <th scope="col" class="px-12 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Patient Name
                                </th>
                                <th scope="col" class="px-14 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Khmer Name
                                </th>
                                <th scope="col" class="px-3 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Gender
                                </th>
                                <th scope="col" class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    DOB
                                </th>
                                <th scope="col" class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Contact No.
                                </th>
                                <th scope="col" class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200" style="background: rgba(63, 81, 181, 0.3);">
                                    Queued At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                            <TableRow id='1234567' name="Lim Pei En" khmername="Champei" gender="F" DOB="16/04/2003" contactnumber="+885 76 234 5678" queuedat="11:05:33 A.M."/>
                            <TableRow id='1234568' name="Beverley Teo" khmername="Kaliyanei" gender="F" DOB="14/03/2002" contactnumber="+885 76 234 5678" queuedat="11:08:50 A.M."/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import TableRow from './TableRow.vue';

export default {
    components: {
        TableRow
    }
}

</script>

<style>

.table {
    width: 1200px;
}

.table-heading {
    background: rgba(63, 81, 181);
}

.line {
    height: 1px;
    background: rgba(0, 0, 0, 0.17);
}
</style>