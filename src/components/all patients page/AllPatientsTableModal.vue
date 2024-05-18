<template>
    <div class="container max-w-3xl px-4 mx-auto sm:px-8 table">
        <div class="py-8">
            <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
                <h2 class="text-4xl leading-tight" style="color:black">
                    All Patients
                </h2>
            </div>

            <div class="flex justify-between items-center" style="padding-top: 20px; padding-bottom: 20px">
                <div class="relative flex-grow">
                    <input 
                        type="text" 
                        id="&quot;form-subscribe-Filter" 
                        class="rounded-lg border-transparent appearance-none bg-gray-300 border border-gray-300 py-3 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        placeholder="Search"
                    />
                </div>

                <div class="flex items-center space-x-3">
                    <Text style="font-size:medium">Add New Patient</Text>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                          </svg>                          
                      </span>
                </div>
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