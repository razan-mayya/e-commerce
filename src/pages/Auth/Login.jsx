import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Login = ({ title, para, inputt, btntitle, url }) => {
    const testPage = () => {
        (path = "/register") ? path = "/login" : path = "/register"
    }
    return (
        <div className='loginContainer'>
            <h4 className='centerAndBold'> {title}</h4>
            <div className='my-3'>
                {inputt}
            </div>
            <FloatingLabel
                controlId="floatingInput"
                label=" ...الايميل"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="...كلمة السر">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="dark"> {btntitle}</Button>
            <p className='centerAndBold'> {para}
                <Link to={url}>
                    <span onClick={testPage}>اضغط هنا</span>
                </Link>
            </p>
        </div>
    )
}
