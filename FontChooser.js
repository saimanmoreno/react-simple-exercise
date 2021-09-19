/**
 * ATIVIDADE 4 - REACT
 * DISCENTE: SIMAO MORENO #110406
 */

class FontChooser extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
			min: Number(this.props.min),
			max: Number(this.props.max),
			size: Number(this.props.size),
            bold: (this.props.bold == "true"),
			showForm: false
		};
	}

	componentDidMount() {

		var min = this.state.min;
		var max = this.state.max;
		var size = this.state.size;
		var aux = 0;

		if (min > max) {
			aux = max;
			max = min;
			min = aux;
		}

		if (min < 1) min = 1;
		
		if (size < min) size = min;
		
		if (size > max) size = max;

		this.setState({
			min: min,
			max: max,
			size: size
		})
	}

	onTextClick() {
		this.setState({ showForm: !this.state.showForm })	
	}

	changeWeight() {
		this.setState({ bold: !this.state.bold })
    }

	changeSize(e) {		
		if (e.target.id == "increaseButton") {
			if (this.state.size < this.state.max)
				this.setState({ size: this.state.size + 1 });
		} else {
			if (this.state.size > this.state.min)
				this.setState({ size: this.state.size - 1 });
		}
	}

	resetSize() {

		var size = Number(this.props.size);
		var min = this.state.min;
		var max = this.state.max;

		if (size < min) size = min;

		if (size > max) size = max;

		this.setState({ size: size });
	}

	render() {

		var showForm = this.state.showForm;
		var size = this.state.size;
		var weight = this.state.bold ? 'bold' : 'normal';
		var color = ((this.state.size == this.state.max) || (this.state.size == this.state.min)) ? 'red' : 'black';

		return (
			<div>
				<input type="checkbox" id="boldCheckbox" hidden={!showForm} checked={this.state.bold}
					onChange={this.changeWeight.bind(this)} />				
				<button id="decreaseButton" hidden={!showForm}
					onClick={this.changeSize.bind(this)} >-</button>
				<span id="fontSizeSpan" hidden={!showForm} style={{ color: color }}
					onDoubleClick={this.resetSize.bind(this)}> {size} </span>
				<button id="increaseButton" hidden={!showForm}
					onClick={this.changeSize.bind(this)} >+</button>
				<span id="textSpan" style={{ fontSize: size, fontWeight: weight }}
					onClick={this.onTextClick.bind(this)}> {this.props.text} </span>
			</div>
		);
	}
}

/**
 * ATIVIDADE 4 - REACT
 * DISCENTE: SIMAO MORENO #110406
 */