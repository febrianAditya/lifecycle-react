import React, { Component } from 'react';
import axios from 'axios';

class LegoBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     legoPieces: 0 // Mulai dengan 0 kepingan
  //   };
  // }
  constructor() {
    super()
    this.state = {
      legoPieces : 0
    }

    console.log("-=> this is constructor");
    
  }

  handleAdd = () => {
    // console.log("aku terpanggil yaa");
    
    console.log(this.state.legoPieces, "==>");
    
    this.setState({
      legoPieces: this.state.legoPieces + 1
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, "==> ini data sebelumnya");
  }

  shouldComponentUpdate() {
    if (this.state.legoPieces < 3) {
      return false
      fetch("localhost:3000/" + this.state.legoPieces)

    }

    return true
  }

  // async componentDidMount() {
  //   try {
  //     let data = await fetch("https://jsonplaceholder.typicode.com/users")
  //     let resultData = await data.json()
  //     console.log(resultData, "==> FINAL");
      
  //   } catch (error) {
  //     console.log(error, "===> ini error"); 
  //   }
  // }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response, "==> final data");
      })
      .catch(function (error) {
        console.log(error);
      })    
  }


  handelApi =async () => {
    try {
      let data = fetch("https://jsonplaceholder.typicode.com/users")
      let resultData = await data.json()
      console.log(resultData, "==> FINAL");
      
    } catch (error) {
      console.log(error, "===> ini error"); 
    }
  }

  render(){
    return(
      <>

        {console.log("==> INI RENDER")}
        
        <h1>{this.state.legoPieces}</h1>
        <button onClick={this.handleAdd}>Tambah kepingan lego</button>
      </>
    )
  }

  // Menentukan apakah komponen perlu re-render berdasarkan jumlah kepingan
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.legoPieces > 2) {
  //     console.log(`State berubah dan lebih dari 2, komponen akan di-render ulang. State saat ini: ${nextState.legoPieces}`);
  //     return true; // Lanjutkan re-render jika state lebih dari 2
  //   }
  //   console.log(`State berubah tetapi tidak lebih dari 2, komponen tidak akan di-render. State saat ini: ${nextState.legoPieces}`);
  //   return false; // Cegah re-render jika state kurang dari atau sama dengan 2
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // Jika state berubah menjadi 3, kali state dengan 3
  //   if (prevState.legoPieces < 3 && this.state.legoPieces === 3) {
  //     this.setState((prevState) => ({
  //       legoPieces: prevState.legoPieces * 3
  //     }));
  //     console.log('State dikalikan 3 karena mencapai 3!');
  //   }
  // }


  // Fungsi untuk menambah kepingan Lego
  // addPiece = () => {
  //   this.setState((prevState) => ({
  //     legoPieces: prevState.legoPieces + 1
  //   }));
  // };

  // render() {
  //   console.log('Komponen sedang di-render...');
  //   return (
  //     <div>
  //       <h1>Bangunan Lego: {this.state.legoPieces} Kepingan</h1>
  //       <button onClick={this.addPiece}>Tambah Kepingan</button>
  //     </div>
  //   );
  // }
}

export default LegoBuilder;
