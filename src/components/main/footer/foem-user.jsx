import React, {useState} from "react";
import * as Yup from "yup";
import './footer.css'

// 定义规则
const FormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    message: Yup.string().required('Message is required')
});

const MyForm = () => {
    // 定义状态
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        message: ''
    });
    // 错误信息
    const [errors, setErrors] = useState({});
    const [inputClass, setInputClass] = useState("");

    // 更新表单
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        if (event.target.value.length >= 1) {
            setInputClass(event.target.classList.add("input-length-more-1"));
        } else {
            setInputClass(event.target.classList.remove("input-length-more-1"));
        }
    };


    // 发送请求
    const handleSubmit = async (event) => {
        // 阻止默认
        event.preventDefault();

        try {
            await FormSchema.validate(formData, {abortEarly: false});
            // Form is valid, do something here
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const newErrors = {};
                err.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setErrors(newErrors);
            }
        }
    };

    return (
        <form className="mx-auto mt-10 flex max-w-[1280px] flex-col items-start justify-around gap-7 md:mt-10 lg:mt-16"
              onSubmit={handleSubmit}>
            <div className={'form-field border-b-2 border-secGreen'}>

                <input
                    className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label className={'label text-[17px]'} htmlFor="name">Name:</label>
            </div>
            {errors.name && <p className="-mt-6 text-[12px] text-red-500">{errors.name}</p>}
            <div className={'flex w-full flex-col gap-7 lg:flex-row'}>
                <div className={'lg:w-1/2'}>
                    <div className={'form-field border-b-2 border-secGreen'}>
                        <input
                            className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label className={'label text-[17px]'} htmlFor="email">Email:</label>

                    </div>
                    {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                </div>
                <div className={'lg:w-1/2'}>
                    <div className={'form-field border-b-2 border-secGreen'}>
                        <input
                            className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label className={'label text-[17px]'} htmlFor="password">Password:</label>

                    </div>

                    {errors.password && <p className="mt-1 text-[12px] text-red-500">{errors.password}</p>}
                </div>
            </div>
            <div className={'form-field border-b-2 border-secGreen'}>

                <input
                    className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <label className={'label text-[17px]'} htmlFor="message">Message:</label>
            </div>
            {errors.message && <p className="-mt-6 text-[12px] text-red-500">{errors.message}</p>}
            <div className={'z-0 mt-3'}>
                <button
                    className={'button-send mt-3 h-[40px] w-[100px] border border-secGreen bg-bgGreen text-secGreen'}
                    type="submit">Send
                </button>
            </div>
        </form>
    );
};

export default MyForm;
