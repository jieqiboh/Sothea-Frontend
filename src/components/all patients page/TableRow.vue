<template>
    <tr>
        <td class="px-5 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ id }}
            </p>
        </td>
        <td class="px-12 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ name }}
            </p>
        </td>
        <td class="px-14 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ khmername }}
            </p>
        </td>
        <td class="px-3 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ gender }}
            </p>
        </td>
        <td class="px-5 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ DOB }}
            </p>
        </td>
        <td class="px-5 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ contactnumber }}
            </p>
        </td>
        <td class="px-5 py-4 text-sm bg-white border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ queuedat }}
            </p>
        </td>
    </tr>    
</template>

<script>
export default {
    props: [
        'id',
        'name',
        'khmername',
        'gender',
        'DOB',
        'contactnumber',
        'queuedat'
    ]
}
</script>


<style>

</style>