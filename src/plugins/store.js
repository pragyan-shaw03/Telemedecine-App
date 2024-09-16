import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
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
        addDoctors(state, doctor) {
            state.doctors.push(doctor);
        },
        login(state, user) {
            state.user = user;
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    },
    actions: {
        addDoctors(context, doctor) {
            context.commit('addDoctors', doctor);
        }
    },
    getters: {
        getDoctors(state) {
            return state.doctors;
        },
        getUser(state) {
            return state.user;
        }
    }
})

export default store;