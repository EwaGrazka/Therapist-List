import React, { Component } from "react";
import "../scss/Lista.scss";
import Pagination from "@material-ui/lab/Pagination";

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
      pageCount: 36,
      startIndex: 0,
      endIndex: 10,
    },
  };
  handleInitialState = () => {
    this.setState({
      pagination: {
        pageCount: Math.ceil(this.props.therapists.length / 10),
      },
    });
  };

  componentDidMount() {
    this.props.fetchTherapists();
    if (this.props.therapists) {
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
    this.setState({
      isModalOpen: false,
    });
  };

  handleEditTherapist = (fullName, aboutMe, id) => {
    this.props.editTherapist(fullName, aboutMe, id);
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
        <header>
          <svg
            width="28"
            height="28"
            className="logo"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.89551 16H4.82324V3.67871H0.193359V0.595703H12.5146V3.67871H7.89551V16ZM17.4305 3.67871V9.84473H20.5135C20.936 9.84473 21.3335 9.76595 21.7059 9.6084C22.0783 9.44368 22.4041 9.22168 22.6834 8.94238C22.9627 8.66309 23.1811 8.33724 23.3387 7.96484C23.5034 7.58529 23.5857 7.18424 23.5857 6.76172C23.5857 6.33919 23.5034 5.94173 23.3387 5.56934C23.1811 5.18978 22.9627 4.86035 22.6834 4.58105C22.4041 4.30176 22.0783 4.08333 21.7059 3.92578C21.3335 3.76107 20.936 3.67871 20.5135 3.67871H17.4305ZM17.4305 16H14.3475V0.595703H20.5135C21.0792 0.595703 21.6235 0.670898 22.1463 0.821289C22.6691 0.964518 23.1561 1.1722 23.6072 1.44434C24.0656 1.70931 24.4809 2.03158 24.8533 2.41113C25.2329 2.78353 25.5551 3.19889 25.8201 3.65723C26.0923 4.11556 26.2999 4.60612 26.4432 5.12891C26.5936 5.65169 26.6687 6.19596 26.6687 6.76172C26.6687 7.60677 26.5076 8.40527 26.1854 9.15723C25.8631 9.90202 25.4227 10.5537 24.8641 11.1123C24.3055 11.6709 23.6502 12.1113 22.8982 12.4336C22.1535 12.7559 21.3585 12.917 20.5135 12.917H17.4305V16Z"
              fill="#213C9A"
            />
          </svg>
          <h1>Lista specjalistów</h1>
        </header>

        <div>
          {isSideBarVisible ? (
            <div className="bcg">
              {" "}
              <div className="sideBar">
                <span onClick={() => this.closeSideBar()} className="x">
                  x
                </span>
                {!isEditSideBarOpen ? (
                  <div>
                    <h1>Informacja o specjaliście</h1>

                    <h3>Imię i nazwisko</h3>

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
                      <p>{aboutMe || therapistDetails.aboutMe}</p>
                    ) : (
                      <p>Brak danych</p>
                    )}
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
                        className="cancel"
                        onClick={() => this.handleCloseEditModal()}
                      >
                        Anuluj
                      </button>
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
