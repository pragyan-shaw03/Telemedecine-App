<template>
    <DoctorCard v-for="doctor in getDoctors" :key="doctor.name" :name="doctor.name" :id="doctor.id"></DoctorCard>
</template>

<script>
import { mapGetters } from 'vuex';
import DoctorCard from './DoctorCard.vue';

export default {
    components: {
        DoctorCard
    },
    computed: {
        ...mapGetters(['getDoctors']),
    }
}
</script>