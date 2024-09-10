import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('constructor: Komponen sedang dibuat');
  }

  // Lifecycle method Mounting
  componentDidMount() {
    console.log('componentDidMount: Komponen telah dipasang di DOM');
    // Bisa melakukan aksi seperti fetch data atau setting event listener di sini.
  }

  // Lifecycle method Updating (opsional)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Apakah komponen perlu diperbarui?');
    console.log(nextProps, "===> Next Props");
    console.log(nextState, "==> Next State");
    return true; // Jika false, maka komponen tidak akan di-re-render
  }

  // Lifecycle method Updating
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Komponen telah diperbarui');
    console.log(prevProps, "===> prev Props");
    console.log(prevState, "==> prev State");
    // Aksi setelah komponen diperbarui, misalnya memeriksa state baru.
  }

  // Lifecycle method Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount: Komponen akan dihapus dari DOM');
    // Bisa melakukan aksi pembersihan di sini, misalnya membatalkan fetch atau menghapus event listener.
  }

  // Fungsi untuk menambah count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Fungsi untuk mengurangi count
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Render method (Wajib)
  render() {
    console.log('render: Komponen sedang dirender');
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Tambah</button>
        <button onClick={this.decrement}>Kurangi</button>
      </div>
    );
  }
}

export default Counter;
