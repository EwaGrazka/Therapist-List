import React, { Component } from "react";
import "../scss/Lista.scss";
import Pagination from "@material-ui/lab/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Logo } from "./../img/logo.svg";
import { ReactComponent as CloseButton } from "./../img/closeButton.svg";

import { connect } from "react-redux";
import {
  fetchTherapists,
  fetchTherapistDetails,
  removeTherapist,
  editTherapist,
} from "../actions/listActions";

class List extends Component {
  state = {
    isSideBarVisible: false,
    isModalOpen: false,
    selectedTherapistId: 0,
    fullName: "",
    aboutMe: "",
    isEditSideBarOpen: false,
    pageIndex: 0,
    pagination: {
      pageCount: 0,
      startIndex: 0,
      endIndex: 10,
    },
  };
  handleInitialState = () => {
    this.setState({
      pagination: {
        pageCount: Math.floor(this.props.therapists.length / 10),
        startIndex: this.state.pagination.startIndex,
        endIndex: this.state.pagination.endIndex,
      },
    });
  };

  componentDidMount() {
    this.props.fetchTherapists();
  }

  componentDidUpdate(prevProps) {
    if (this.props.therapists !== prevProps.therapists) {
      this.handleInitialState();
    }
  }

  handleClick = (id) => {
    this.setState({
      isSideBarVisible: true,
      selectedTherapistId: id,
    });
    this.props.fetchTherapistDetails(id);
  };

  closeSideBar = () => {
    this.setState({
      isSideBarVisible: false,
      isEditSideBarOpen: false,
    });
  };

  handleSwitchPage = (_, page) => {
    this.setState({
      pagination: {
        pageCount: this.state.pagination.pageCount,
        startIndex: page * 10,
        endIndex: page * 10 + 10,
      },
    });
  };

  handleOpenEditModal = () => {
    this.setState({
      isEditSideBarOpen: true,
    });
  };

  handleOpenRemoveModal = () => {
    this.setState({
      isModalOpen: true,
      isSideBarVisible: false,
    });
  };
  handleCloseRemoveModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleCloseEditModal = () => {
    this.setState({
      isEditSideBarOpen: false,
    });
  };

  handleRemoveTherapist = (id) => {
    this.props.removeTherapist(id);
    toast.warn("Dane terapeuty zostały usunięte.");
    this.setState({
      isModalOpen: false,
    });
  };

  handleEditTherapist = (fullName, aboutMe, id) => {
    this.props.editTherapist(fullName, aboutMe, id);
    toast.success("Pomyślnie zmieniono dane.");
    this.setState({
      isEditSideBarOpen: false,
    });
  };
  setUserFullName = (e) => {
    this.setState({
      fullName: e,
    });
  };
  setUserAboutMe = (e) => {
    this.setState({
      aboutMe: e,
    });
  };

  render() {
    let {
      isSideBarVisible,
      pagination,
      selectedTherapistId,
      isEditSideBarOpen,
      aboutMe,
      fullName,
    } = this.state;
    let { therapists, therapistDetails } = this.props;

    return (
      <>
        <ToastContainer />
        <header>
          <Logo />
          <h1>Lista specjalistów</h1>
        </header>

        <div>
          {isSideBarVisible ? (
            <div className="bcg">
              {" "}
              <div className="sideBar">
                <div className="sideBarHeader">
                  <span onClick={() => this.closeSideBar()} className="x">
                    <CloseButton />
                  </span>
                  <h1 className="info">Informacja o specjaliście</h1>
                </div>

                {!isEditSideBarOpen ? (
                  <>
                    <div>
                      <h3 className="name">Imię i nazwisko</h3>

                      {therapistDetails &&
                      therapistDetails.fullName &&
                      therapistDetails.fullName !== "" ? (
                        <p>{therapistDetails.fullName}</p>
                      ) : (
                        <p>Brak danych</p>
                      )}

                      <h3>Specjalizacje</h3>
                      {therapistDetails &&
                      therapistDetails.specializations &&
                      therapistDetails.specializations.length !== 0 ? (
                        <p>{therapistDetails.specializations.join(`, `)}</p>
                      ) : (
                        <p>Brak danych</p>
                      )}
                      <h3>Rodzaje terapii</h3>
                      {therapistDetails &&
                      therapistDetails.therapyTypes &&
                      therapistDetails.therapyTypes.length !== 0 ? (
                        <p>{therapistDetails.therapyTypes.join(`, `)}</p>
                      ) : (
                        <p>Brak danych</p>
                      )}
                      <h3>Certyfikaty</h3>

                      {therapistDetails &&
                      therapistDetails.certificates &&
                      therapistDetails.certificates.length !== 0 ? (
                        therapistDetails.certificates.map((therapist) => {
                          return (
                            <p>
                              <li>{therapist.name}</li>
                            </p>
                          );
                        })
                      ) : (
                        <p>Brak danych</p>
                      )}

                      <h3>O mnie</h3>
                      {therapistDetails &&
                      therapistDetails.aboutMe &&
                      therapistDetails.aboutMe !== "" ? (
                        <p className="aboutMe">
                          {aboutMe || therapistDetails.aboutMe}
                        </p>
                      ) : (
                        <p>Brak danych</p>
                      )}
                    </div>
                    <div className="mainButtonsWrapper">
                      <button
                        className="edit"
                        onClick={() => this.handleOpenEditModal()}
                      >
                        Edytuj
                      </button>
                      <button
                        className="remove"
                        onClick={() => this.handleOpenRemoveModal()}
                      >
                        Usuń
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="editSideBarWrapper">
                    <h1>Edytuj informacje o specjaliście</h1>
                    <h3>Imię i nazwisko</h3>
                    <input
                      type="text"
                      onChange={(e) => this.setUserFullName(e.target.value)}
                    ></input>
                    <h3>O mnie</h3>
                    <textarea
                      onChange={(e) => this.setUserAboutMe(e.target.value)}
                    ></textarea>
                    <div className="buttonsWrapper">
                      <button
                        className="save"
                        onClick={() =>
                          this.handleEditTherapist(
                            fullName,
                            aboutMe,
                            selectedTherapistId
                          )
                        }
                      >
                        Zapisz
                      </button>
                      <button
                        className="cancel"
                        onClick={() => this.handleCloseEditModal()}
                      >
                        Anuluj
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}
          {this.state.isModalOpen ? (
            <div className="removeModalBackground">
              <div className="removeModal">
                <h1>Usunąć specjalistę?</h1>
                <p>
                  Czy na pewno chcesz usunąć tego specjalistę? Tej akcji nie
                  można cofnąć.
                </p>
                <button
                  className="cancel"
                  onClick={() => this.handleCloseRemoveModal()}
                >
                  Anuluj
                </button>
                <button
                  className="remove"
                  onClick={() =>
                    this.handleRemoveTherapist(selectedTherapistId)
                  }
                >
                  Usuń
                </button>
              </div>
            </div>
          ) : null}
          <div className="listWrapper">
            <div className="specialistsWrapper">
              <h2>Specjalista</h2>
              {therapists && therapists !== null
                ? therapists
                    .slice(
                      this.state.pagination.startIndex,
                      this.state.pagination.endIndex
                    )
                    .map((therapist) => {
                      return (
                        <div
                          onClick={() =>
                            this.handleClick(therapist.therapistId)
                          }
                          className="specialist"
                        >
                          <img src={therapist.avatarUrl} alt="avatar"></img>
                          <li>{therapist.fullName}</li>
                        </div>
                      );
                    })
                : null}
            </div>
            <div className="specializationWrapper">
              <h2>Specjalizacje</h2>
              {therapists && therapists !== null
                ? therapists
                    .slice(
                      this.state.pagination.startIndex,
                      this.state.pagination.endIndex
                    )
                    .map((therapist) => {
                      return (
                        <ul
                          onClick={() =>
                            this.handleClick(therapist.therapistId)
                          }
                          className="speciallization"
                        >
                          <li>
                            {" "}
                            {therapist.specializations.length <= 3 ? null : (
                              <div className="specInfo">
                                <div className="arrowSquare"></div>
                                {therapist.specializations.join(`, `)}
                              </div>
                            )}
                            {therapist.specializations.length <= 3
                              ? therapist.specializations.join(`, `)
                              : therapist.specializations
                                  .splice(0, 3)
                                  .join(`, `) + "..."}
                          </li>
                        </ul>
                      );
                    })
                : null}
            </div>
          </div>
          <div className="paginationWrapper">
            <Pagination
              count={pagination.pageCount}
              page={this.state.pageIndex}
              onChange={(_, page) => {
                this.handleSwitchPage(_, page);
              }}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    therapists: state.main.therapists,
    therapistDetails: state.main.therapistDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTherapists: () => dispatch(fetchTherapists()),
    fetchTherapistDetails: (id) => dispatch(fetchTherapistDetails(id)),
    removeTherapist: (id) => dispatch(removeTherapist(id)),
    editTherapist: (fullName, aboutMe, id) =>
      dispatch(editTherapist(fullName, aboutMe, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
