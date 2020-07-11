import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../action';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//Component untuk menampilkan fitur Kalkulator Waktu dan Berat

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.valueChange(e.target.value)
    }

    render() {
        const value = this.props.value;
        const satuan = this.props.satuan;

        return (
            <React.Fragment>
                <TextField
                    variant="outlined"
                    margin="normal"
                    value={value}
                    onChange={this.handleChange}
                    label={satuan}
                    type="text"
                />
            </React.Fragment>
        );
    }
}

class DisplayTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            satuan: ''
        }
        this.menitChange = this.menitChange.bind(this)
        this.detikChange = this.detikChange.bind(this)
    }

    toDetik(time) {
        return time * 60;
    }
    toMenit(time) {
        return time / 60;
    }

    menitChange(time) {
        this.setState({ satuan: 'menit', time })
    }

    detikChange(time) {
        this.setState({ satuan: 'detik', time })
    }

    render() {
        const time = this.state.time;
        const satuan = this.state.satuan;
        const detik = satuan === 'menit' ? this.toDetik(time) : time;
        const menit = satuan === 'detik' ? this.toMenit(time) : time;
        return (
            <div>
                <Typography component="h2" variant="h5" style={{ color: '#c86d49' }}>
                    Time Converter
                </Typography>
                <Converter satuan="detik" value={detik} valueChange={this.detikChange} /> <br />
                <Converter satuan="menit" value={menit} valueChange={this.menitChange} />
            </div>
        )
    }
}

class DisplayWeight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            berat: '',
            satuan: ''
        }
        this.gramChange = this.gramChange.bind(this)
        this.kiloGramChange = this.kiloGramChange.bind(this)
    }

    toGram(berat) {
        return berat * 1000;
    }
    toKiloGram(berat) {
        return berat / 1000;
    }

    gramChange(berat) {
        this.setState({ satuan: 'gram', berat })
    }

    kiloGramChange(berat) {
        this.setState({ satuan: 'kilogram', berat })
    }

    render() {
        const berat = this.state.berat;
        const satuan = this.state.satuan;
        const gram = satuan === 'kilogram' ? this.toGram(berat) : berat;
        const kiloGram = satuan === 'gram' ? this.toKiloGram(berat) : berat;
        return (
            <div color="primary">
                <Typography component="h2" variant="h5" style={{ color: '#c86d49' }}>
                    Weight Converter
                </Typography>
                <Converter satuan="gram" value={gram} valueChange={this.gramChange} /> <br />
                <Converter satuan="kilogram" value={kiloGram} valueChange={this.kiloGramChange} />
            </div>
        )
    }
}


export default ({ title }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setTitle(title))
    })
    return (
        <React.Fragment>
            <DisplayTime />
            <br /> <br />
            <Divider />
            <br /> <br />
            <DisplayWeight />
        </React.Fragment>
    )
}
