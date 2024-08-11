<template>
    <tr @click="handleClick">
        <td class="px-6 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ formattedQueuedAt }} <!-- dummy for queue no --> 
            </p>
        </td>
        <td class="px-5 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ id }}
            </p>
        </td>
        <td class="px-13 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ name }}
            </p>
        </td>
        <td class="px-14 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ khmername }}
            </p>
        </td>
        <td class="px-3 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ gender }}

            </p>
        </td>
        <td class="px-5 py-3 text-sm border-b border-gray-200">
            <div class="text-gray-900 whitespace-no-wrap allergies nil">
                NIL <!-- dummy for allergies --> 
            </div>
        </td>
        <td class="px-5 py-4 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                {{ contactnumber }} <!-- dummy for referral --> 
            </p>
        </td>
    </tr>    
</template>

<script>
export default {
    props: {
        id: String,
        name: String,
        khmername: String,
        gender: String,
        DOB: String,
        contactnumber: String,
        queuedat: String
    },
    computed: {
        formattedDOB() {
            const date = new Date(this.DOB);
            return date.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: 'numeric'});
        },
        formattedQueuedAt() {
            const date = new Date(this.queuedat);
            return date.toLocaleTimeString('en-CA', {timeStyle: 'short'});
        }
    },
    methods: {
        handleClick() {
            this.$router.push({ name: 'patient', params: { id: this.id } });
        }
    }
}
</script>


<style>
.allergies {
    padding: 5px;
    text-align: center;
    border-radius: 14px;
}
.allergies.nil {
    background-color: rgb(172, 249, 172);
}
.allergies.yes {
    background-color: rgb(255, 180, 180);
}
</style>