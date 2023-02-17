const UserComponent = () => {
  return (
    <div class="dropdown ml-auto">
      <button
        class="btn btn-secondary dropdown-toggle d-flex justify-content-center align-items-center p-1"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
        id="account-dropdown"
      >
        <img
          src="https://i.pinimg.com/originals/c5/85/4a/c5854a027ffef745a3e6a082a813f6e4.png"
          class="account-avatar mr-2"
          alt=""
        />
        Power tigers
      </button>
      <div class="dropdown-menu">
        <div class="d-flex dropdown-item pr-2">
          <a class="pr-2 text-white" href="#">
            Account
          </a>
          <i class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
        </div>
        <div class="d-flex dropdown-item pr-2">
          <a class="pr-2 text-white" href="#">
            Set up your Family Plan
          </a>
          <i class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
        </div>
        <div class="d-flex dropdown-item pr-2">
          <a class="pr-0 text-white" href="#">
            Profile
          </a>
        </div>
        <div class="d-flex dropdown-item pr-2">
          <a class="pr-0 text-white" href="#">
            Support
          </a>
          <i class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
        </div>
        <div class="d-flex dropdown-item pr-2">
          <a class="pr-0 text-white" href="#">
            Download
          </a>
          <i class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
        </div>
        <div class="d-flex settings dropdown-item">
          <a class="pr-0 text-white" href="#">
            Settings
          </a>
        </div>
        <a class="pr-0 pb-0 text-white" href="./login.html">
          <div class="d-flex dropdown-item">Log Out</div>
        </a>
      </div>
    </div>
  );
};

export default UserComponent;
