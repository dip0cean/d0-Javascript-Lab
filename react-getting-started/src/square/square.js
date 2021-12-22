import '../square/square.css';

/**
 * 함수 컴포넌트를 사용하는 이유
 *  1. state 없이 render() 만 가진다.
 *  2. React.Component 를 확장하는 클래스를 정의하지 않고 props 만 입력 받아 렌더링 대상을 반환한다.
 *  3. 클래스 컴포넌트보다 빠르게 작성 할 수 있는 이점이 있다.
 * 
 * @param {*} props 
 * @returns <button />
 */
function Square(props) {
    return (
        <button 
            className='square' 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;