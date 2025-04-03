//간단한 회원가입 폼
//이름
//생년월일
//국적
//자기소개
import { useState, useRef } from "react";

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })
    const countRef = useRef(0);
    // console.log(refObj.current)
    // console.log("register 렌더링")
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const onsubmit = () => {
        if (input.name === "") {
            //이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus()
        }
    }

    return (
        <div>

            <button
                onClick={() => {
                    countRef.current++
                    console.log(countRef.current)
                }}
            >
                ref +1
            </button>

            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"} />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChange}
                />
                {input.birth}
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}>
                    <option value={""}></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option>
                </select>
                {input.country}
            </div>


            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange} />
            </div>

            <button onClick={onsubmit}>제출</button>
        </div>
    )

}

export default Register;