import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);
    const [follower,setFollowers]=useState(null);
    const [following,setfollowing]=useState(null);

    const [account, setAccount] = useState({
        username: '',
        name: '',
        phone: '',
        email: '',
        avatar: '',
        status: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/profile/inf/${user._id}`);
                //console.log(response.data.name);
                if (response.data) {
                    setAccount({
                        username: response.data.username,
                        name: response.data.name,
                        phone: response.data.phone,
                        email: response.data.email,
                        avatar: response.data.avatar,
                        status: response.data.status
                    });
                } else {
                    console.error('Failed to fetch user data:');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        const fetchfollower=async()=>{
            const response = await axios.get(`http://localhost:8000/api/profile/getfollower/${user._id}`);
            if(response.data.length===0){
                setFollowers([]);
            }
            setFollowers(response.data);
           console.log(response.data);
        };
        const fetchfollowing=async()=>{
            const response = await axios.get(`http://localhost:8000/api/profile/getfollowing/${user._id}`);
            setfollowing(response.data);
            if(response.data.length===0){
                setfollowing([]);
            }
            setfollowing(response.data);
            console.log(response.data);
        }

        if (user) {
            fetchUserData();
            fetchfollower();
            fetchfollowing();
        }
    }, [user]);

    const previewImage = (input, name) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById(`${name}Preview`).src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleImageChange = async (e) => {
        previewImage(e.target, 'avatar');
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        try {
            const response = await axios.post(`http://localhost:8000/api/profile/upload/${user._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.avatar) {
                setAccount((prevAccount) => ({
                    ...prevAccount,
                    avatar: response.data.avatar
                }));
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
    
        const data = {
            name: account.name,
            phone: account.phone
        };
    
        try {
            const response = await axios.post(`http://localhost:8000/api/profile/update/${user._id}`, data);
            if (response.data.name) {
                setAccount(response.data);
            }
            window.location.href = '/profile';
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="container light-style flex-grow-1 container-p-y">
            <h4 className="font-weight-bold py-3 mb-4">
                Account Management
            </h4>
            <div className="card overflow-hidden">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">Informations</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#follower">Follower</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#following">Following</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="account-general">
                                <div className="card-body media align-items-center">
                                    <form onSubmit={handleProfileUpdate} encType="multipart/form-data" method="post">
                                        <img id="avatarPreview" src={account.avatar} alt="Avatar Preview"
                                            style={{ maxWidth: '500px', marginTop: '10px', borderRadius: '10px' }} />
                                        <div className="media-body mt-4 mr-4">
                                            <label className="btn btn-outline-primary">
                                                Thêm ảnh
                                                <input type="file" className="form-control" name="avatar"
                                                    onChange={handleImageChange} />
                                            </label>
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                                <form id="profileForm" onSubmit={handleProfileUpdate} method="post">
                                    <hr className="border-light m-0" />
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Account: </label>
                                            <input type="text" className="form-control mb-1" name="username"
                                                value={account.username} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Fullname: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={account.name}
                                                onChange={(e) => setAccount({ ...account, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Phone number: </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                value={account.phone}
                                                onChange={(e) => setAccount({ ...account, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email: </label>
                                            <input type="text" className="form-control mb-1" name="email" readOnly
                                                value={account.email} />
                                        </div>
                                    </div>
                                    <div className="text-right mt-3 mb-3">
                                        <button type="submit" className="btn btn-primary" form="profileForm">Save Change</button>&nbsp;
                                        <button type="button" className="btn btn-default" onClick={() => window.location.href = '/profile'}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="follower">
    <div className="col-lg-8 col-md-12">
        <div className="cart-table-wrap">
            <table className="cart-table">
                <thead className="cart-table-head">
                    <tr className="table-head-row">									
                        <th className="product-image">Avatar</th>
                        <th className="product-name">Name</th>
                    </tr>
                </thead>
                <tbody>
    {Array.isArray(follower) && follower.map((item) => (
        <tr className="table-body-row">
            <td className="product-image"><img src={item.avatar} alt=""></img></td>
            <td className="product-name">{item.name}</td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    </div>
</div>
<div className="tab-pane fade" id="following">
    <div className="col-lg-8 col-md-12">
        <div className="cart-table-wrap">
            <table className="cart-table">
                <thead className="cart-table-head">
                    <tr className="table-head-row">									
                        <th className="product-image">Avatar</th>
                        <th className="product-name">Name</th>
                    </tr>
                </thead>
                <tbody>
    {Array.isArray(following) && following.map((item) => (
        <tr className="table-body-row">
            <td className="product-image"><img src={item.avatar} alt=""></img></td>
            <td className="product-name">{item.name}</td>
        </tr>
    ))}
</tbody>
            </table>
        </div>
    </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
