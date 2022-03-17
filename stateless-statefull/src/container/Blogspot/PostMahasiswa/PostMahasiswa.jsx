import React, {Component} from "react";
import './PostMahasiswa.css';
import Mahasiswa from "../../component/PostMahasiswa/Mahasiswa"

class PostMahasiswa extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mahasiswa?_sort=id&_order=desc')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listMahasiswa: result
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((response) => {
                this.ambilDataDariServerAPI()
            })
    }
}