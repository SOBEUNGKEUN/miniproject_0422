import { useState } from 'react';
import classes from './Calculator.module.css';

// 행성을 구분해주는 일반 객체 추가
const scaleNames = {
    M: '수성',
    V: '금성',
    E: '지구',
    Ms: '화성',
    J: '목성',
    S: '토성',
    U: '천왕성',
    N: '해왕성',
};
// 무게 변환 함수
function toMurcury(weight) {
    return (weight * 0.38);
}
function toVenus(weight) {
    return (weight * 0.90);
}
function toEarth(weight) {
    return (weight * 1);
}
function toMars(weight) {
    return (weight * 0.38);
}
function toJupiter(weight) {
    return (weight * 2.36);
}
function toSaturn(weight) {
    return (weight * 0.91);
}
function toUranus(weight) {
    return (weight * 0.89);
}
function toNeptune(weight) {
    return (weight * 1.14);
}


// 실제 무게변환을 수행 및 문자열 값에 대한 유효성 처리 함수
function tryConvert(weight, convert) {
    const input = parseFloat(weight);

    // 만약 사용자가 숫자가 아닌 문자를 입력하였을 경우
    if (Number.isNaN(input)) {
        return '';
    };

    // 소수점값을 rounding 처리 후 반환
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

const Calculator = props => {
    const [state, setState] = useState({ weight: '', scale: '' })

    // 몸무게
    const weight = state.weight;
    const scale = state.scale;

    // props로 내려보내기 전에 변환을 먼저 수행
    // scale을 확인하여 행성 구분
    const murcury = scale === 'M' ? tryConvert(weight, toMurcury) : weight.murcury;

    const venus = scale === 'V' ? tryConvert(weight, toVenus) : weight.venus;

    const earth = scale === 'E' ? tryConvert(weight, toEarth) : weight.earth;

    const mars = scale === 'Ms' ? tryConvert(weight, toMars) : weight.mars;

    const jupiter = scale === 'J' ? tryConvert(weight, toJupiter) : weight.jupiter;

    const saturn = scale === 'S' ? tryConvert(weight, toSaturn) : weight.saturn;

    const uranus = scale === 'U' ? tryConvert(weight, toUranus) : weight.uranus;

    const neptune = scale === 'N' ? tryConvert(weight, toNeptune) : weight.neptune;

    const changeWeightHandler = (inputValue, scale) => {
        setState({ weight: inputValue, scale: scale });
    }

    return (
        <>
            <WeightInput scale='M' weight={murcury} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='V' weight={venus} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='E' weight={earth} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='Ms' weight={mars} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='J' weight={jupiter} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='S' weight={saturn} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='U' weight={uranus} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />
            <br></br>
            <hr></hr>

            <WeightInput scale='N' weight={neptune} onWeightChange={changeWeightHandler} />
            <WeightCompare weight={weight} />

        </>
    );

};

// 사용자에게 무게값을 입력받는 컴포넌트 , Calculator에서 분리
const WeightInput = props => {

    // lifting state up
    // state값을 하위 컴포넌트에서 위로 끌어 올려서  상위컴포넌트 갱신
    const InputChangeHandler = (event) => {
        const inputValue = event.target.value;
        const scale = props.scale;
        props.onWeightChange(inputValue, scale);
    };

    return (
        <>
            <h2 className={classes.txt}>{scaleNames[props.scale]}</h2>
            <fieldset className={classes.field}>
                <legend> 몸무게를 입력하세요 :</legend>
                <input className={classes.input} type='text' onChange={InputChangeHandler} placeholder={'양의 정수를 입력하세요'} />
                <br></br> <br></br>
                <legend>{scaleNames[props.scale]}에서의  몸무게 :</legend>
                <br></br>
                <input className={classes.input} type='text' value={props.weight} />
            </fieldset>
        </>
    );

};
// 추가 문구
const WeightCompare = props => {
    const weight = props.weight;
    return weight > 0 ? <p>※ 변한 몸무게 입니다.   단위 : kg</p> : <p>※ 당신의 무게는 비밀일까요?</p>;
};

export default Calculator;