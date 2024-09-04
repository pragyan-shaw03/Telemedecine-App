import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            desktopView: true,
            doctors: [ {id: 0, name: 'Pragyan', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 1, name: 'Aman', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 2, name: 'Aastha', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 3, name: 'Nishant', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 4, name: 'Samarth', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 5, name: 'Aryan', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 6, name: 'Roman', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'},
                       {id: 7, name: 'Satyam', imageUrl: 'https://via.placeholder.com/150',expertise: 'Cardiologist', clinicInfo: 'Heart Clinic, Downtown', address: '123 Heart Street, City, Country'}
                    ]
        }
    },
    mutations: {
        updateDesktopView(state, value) {
            state.desktopView = value;
        },
        addDoctors(state, doctor) {
            state.doctors.push(doctor);
        }
    },
    actions: {
        updateDesktopView(context, value) {
            context.commit('updateDesktopView', value);
        },
        addDoctors(context, doctor) {
            context.commit('addDoctors', doctor);
        }
    },
    getters: {
        isDesktopView(state) {
            return state.desktopView;
        },
        getDoctors(state) {
            return state.doctors;
        }
    }
})

export default store;