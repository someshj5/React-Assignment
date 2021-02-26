import React, { useEffect, useState } from "react";
import { getAllUsers } from "../service/userService";
import Modal from "react-modal";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [InputModal, setInputModal] = useState(false);

  const getUsers = async () => {
    try {
      const resp = await getAllUsers();
      if (resp) {
        setUsers(resp);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
    setInputModal(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const AllUsers =
    users.length > 0 &&
    users.map((user, idx) => {
      return (
        <div
          key={idx}
          onClick={handleSelectedUser.bind(this, user)}
          className="col-10"
        >
          <div className=" p-2 d-flex">
            <div className="border w-25 h-5">
              <img
                className="border-radius-50"
                alt="random"
                height="50px"
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              />
              <span className="px-3">Name: {user.name.firstname}</span>
            </div>
          </div>
        </div>
      );
    });

  const customStylesInputModal = {
    content: {
      width: "441px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "10%",
      height: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: { background: "rgba(0,0,0,0.7)" },
  };

  const handleModalInputClose = () => {
    setInputModal(false);
  };

  return (
    <div className="container">
      <div className="container fs-24 fc-red ff-montserrat my-5 fw-500">
        Admin Panel
      </div>
      <div className="row">
        {(AllUsers && AllUsers) || <div>Please wait</div>}
      </div>
      <Modal
        closeTimeoutMS={300}
        ariaHideApp={false}
        isOpen={InputModal}
        onRequestClose={handleModalInputClose.bind(this)}
        contentLabel="Mobile Input"
        style={customStylesInputModal}
      >
        <div className="container">
          <div className="py-2">
            Name:{" "}
            {`${selectedUser.name && selectedUser.name.firstname} ${
              selectedUser.name && selectedUser.name.lastname
            } `}
          </div>
          <div className="py-2">Email: {selectedUser.email}</div>
          <div className="py-2">Contact: {selectedUser.phone}</div>
          <div className="py-2">Username: {selectedUser.username}</div>
          <div>
            Address:{" "}
            {`
            ${selectedUser.address && selectedUser.address.street},
            ${selectedUser.address && selectedUser.address.number},
            ${selectedUser.address && selectedUser.address.city},
            zipcode:${selectedUser.address && selectedUser.address.zipcode}

            `}
          </div>
          <div className="row mt-5">
            <div onClick={handleModalInputClose.bind(this)} className="col-12">
              <button className=" mt-3 w-100 h-40  ff-barlow fs-16 fw-bold f-style-normal f-stretch-condensed lh-normal l-spacing3-2 text-uppercase">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
