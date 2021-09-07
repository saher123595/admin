let template = document.querySelector(".head");
let left = document.querySelector(".left");
let body = document.querySelector("body");
// let lodisng = document.createElement("div");
var elem = document.createElement('div');
elem.innerHTML = `        
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>`;
elem.setAttribute("id","preloader");
document.body.prepend(elem);
template.innerHTML = `
       <header>
            <div class="logo">
                <img src="../images/logo-icon.png" alt="" />
                <img src="../images/logo-text.png" alt="" />
            </div>
            <div class="parent1">
                <button class="toggle d">
              <i class="mdi mdi-menu font-24"></i>
            </button>
                <div class="one">
                    <button class="toggle">
              <i class="mdi mdi-menu font-24"></i>
            </button>
                    <a href="#" class="mneu">
                        <span>Create New <i class="mdi mdi-chevron-down" aria-hidden="true"></i
              ></span>
                        <ul>
                            <li>Action</li>
                            <li>Another action</li>
                            <hr />
                            <li>Something else here</li>
                        </ul>
                    </a>
                    <button class="search">
              <i class="mdi mdi-account-search"></i>
            </button>
                </div>
                <div class="center">
                    <div>
                        <img src="../images/logo-icon.png" alt="" />
                        <img src="../images/logo-text.png" alt="" />
                    </div>
                </div>
                <div class="two">
                    <a href="#" class="mneu">
                        <span><i class="mdi mdi-bell font-24"></i></span>
                        <ul>
                            <li>Action</li>
                            <li>Another action</li>
                            <hr />
                            <li>Something else here</li>
                        </ul>
                    </a>
                    <button class="mneu saher">
              <i class="font-24 mdi mdi-comment-processing"></i>
              <ul>
                <li>
                  <i
                    class="ti-calendar"
                    data-background="#28b779"                    
                  ></i>
                  <div class="text">
                    <h5>Event today</h5>
                    <a href="#">Just a reminder that event</a>
                  </div>
                </li>
                <li>
                  <i
                    class="ti-settings"
                    data-background="#2255a4"                    
                  ></i>
                  <div class="text">
                    <h5>Event today</h5>
                    <a href="#">Just a reminder that event</a>
                  </div>
                </li>
                <li>
                  <i
                    class="ti-user"
                    data-background="#7460ee"
                    aria-hidden="true"
                  ></i>
                  <div class="text">
                    <h5>Event today</h5>
                    <a href="#">Just a reminder that event</a>
                  </div>
                </li>
                <li>
                  <i
                    class="ti-link"
                    data-background="#da542e"
                    aria-hidden="true"
                  ></i>
                  <div class="text">
                    <h5>Event today</h5>
                    <a href="#">Just a reminder that event</a>
                  </div>
                </li>
              </ul>
            </button>
                    <button class="profile mneu">
              <img src="../images/users/1.jpg" alt="" />
              <ul
                class="dropdown-menu dropdown-menu-right user-dd animated show"
              >
                <li class="dropdown-item">
                  <i class="ti-user m-r-5 m-l-5"></i> My Profile
                </li>
                <li class="dropdown-item">
                  <i class="ti-wallet m-r-5 m-l-5"></i> My Balance
                </li>
                <li class="dropdown-item">
                  <i class="ti-email m-r-5 m-l-5"></i> Inbox
                </li>
                <li class="dropdown-item">
                  <i class="ti-settings m-r-5 m-l-5"></i> Account Setting
                </li>
                <li class="dropdown-item">
                  <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout
                </li>
                <li class="p-l-30 p-10">
                  <a href="#" class="btn btn-sm btn-success btn-rounded"
                    >View Profile</a
                  >
                </li>
              </ul>
            </button>
                </div>

                <div class="media">
                    <div class="one">
                        <a href="#" class="mneu">
                            <span><i class="mdi mdi-plus-thick"></i></span>
                            <ul>
                                <li>Action</li>
                                <li>Another action</li>
                                <hr />
                                <li>Something else here</li>
                            </ul>
                        </a>
                        <button class="search">
                <i class="mdi mdi-account-search"></i>
              </button>
                    </div>
                    <div class="two">
                        <a href="#" class="mneu">
                            <span><i class="mdi mdi-bell font-24"></i></span>
                            <ul>
                                <li>Action</li>
                                <li>Another action</li>
                                <hr />
                                <li>Something else here</li>
                            </ul>
                        </a>
                        <button class="mneu saher">
                <i class="font-24 mdi mdi-comment-processing"></i>
                <ul>
                  <li>
                    <i
                      class="ti-calendar"
                      data-background="#28b779"                    
                    ></i>
                    <div class="text">
                      <h5>Event today</h5>
                      <a href="#">Just a reminder that event</a>
                    </div>
                  </li>
                  <li>
                    <i
                      class="ti-settings"
                      data-background="#2255a4"                    
                    ></i>
                    <div class="text">
                      <h5>Event today</h5>
                      <a href="#">Just a reminder that event</a>
                    </div>
                  </li>
                  <li>
                    <i
                      class="ti-user"
                      data-background="#7460ee"
                      aria-hidden="true"
                    ></i>
                    <div class="text">
                      <h5>Event today</h5>
                      <a href="#">Just a reminder that event</a>
                    </div>
                  </li>
                  <li>
                    <i
                      class="ti-link"
                      data-background="#da542e"
                      aria-hidden="true"
                    ></i>
                    <div class="text">
                      <h5>Event today</h5>
                      <a href="#">Just a reminder that event</a>
                    </div>
                  </li>
                </ul>
              </button>
                        <button class="profile mneu">
                <img src="../images/users/1.jpg" alt="" />
                <ul
                  class="dropdown-menu dropdown-menu-right user-dd animated show"
                >
                  <li class="dropdown-item">
                    <i class="ti-user m-r-5 m-l-5"></i> My Profile
                  </li>
                  <li class="dropdown-item">
                    <i class="ti-wallet m-r-5 m-l-5"></i> My Balance
                  </li>
                  <li class="dropdown-item">
                    <i class="ti-email m-r-5 m-l-5"></i> Inbox
                  </li>
                  <li class="dropdown-item">
                    <i class="ti-settings m-r-5 m-l-5"></i> Account Setting
                  </li>
                  <li class="dropdown-item">
                    <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout
                  </li>
                  <li class="p-l-30 p-10">
                    <a href="#" class="btn btn-sm btn-success btn-rounded"
                      >View Profile</a
                    >
                  </li>
                </ul>
              </button>
                    </div>

                </div>

                <button class="muen-2 d">
            <i class="ti-more"></i>
          </button>
            </div>
        </header>
    
`;

left.innerHTML = `
<ul>
    <li>
      <a href="#Dashboard">
      <i class="mdi mdi-view-dashboard"></i>
      <span>Dashboard</span>
    </a>
    </li>
    <li>
      <a href="#Charts">
      <i class="mdi mdi-chart-bar"></i>
      <span>Charts</span>
    </a>
    </li>
    <li>
      <a href="#Widgets">
      <i class="mdi mdi-chart-bubble"></i>
      <span>Widgets</span>
    </a>
    </li>
    <li>
      <a href="#Tables">
      <i class="mdi mdi-border-inside"></i>
      <span>Tables</span>
    </a>
    </li>
    <li>
      <a href="#Full_Width">
      <i class="mdi mdi-blur-linear"></i>
      <span>Full Width</span>
      </a>
    </li>
    <li class="btn_other_parent">
      <div>
        <i class="mdi mdi-receipt"></i>
        <span class="btn_other">
          <p>Forms</p>
        </span>
      </div>
      <ul>
        <li>
         <a href="#"> <i class="mdi mdi-note-outline"></i><span>Form Basic</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-note-plus"></i><span> Form Wizard </span> </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i class="mdi mdi-relative-scale"></i>
        <span>Buttons</span>
      </a>
    </li>
    <li class="btn_other_parent">
      <div>
        <i class="mdi mdi-face"></i>
        <span class="btn_other">
          <p>Icons</p>
        </span>
      </div>
      <ul>
        <li>
         <a href="#"> <i class="mdi mdi-emoticon"></i> <span>Material Icons</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-emoticon-cool"></i><span>Font Awesome Icons</span> </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i class="mdi mdi-pencil"></i>
        <span>Elements</span>
      </a>
    </li>
    <li class="btn_other_parent">
      <div>
        <i class="mdi mdi-move-resize-variant"></i>
        <span class="btn_other">
          <p>Addons</p>
        </span>
      </div>
      <ul>
        <li>
         <a href="#"> <i class="mdi mdi-view-dashboard"></i><span> Dashboard-2 </span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-multiplication-box"></i><span> Gallery </span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-calendar-check"></i><span> Calendar </span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-bulletin-board"></i><span> Invoice </span> </a>
        </li>
        <li>
          <a href="#"> <i class="mdi mdi-message-outline"></i><span> Chat Option </span> </a>
        </li>
      </ul>
    </li>
    <li class="btn_other_parent">
      <div>
        <i class="mdi mdi-account-key"></i>
        <span class="btn_other">
          <p>Authentication</p>
        </span>
      </div>
      <ul>
        <li>
         <a href="#"> <i class="mdi mdi-all-inclusive"></i><span>Login</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-all-inclusive"></i><span> Register </span> </a>
        </li>
      </ul>
    </li>
    <li class="btn_other_parent">
      <div>
        <i class="mdi mdi-alert"></i>
        <span class="btn_other">
          <p>Errors</p>
        </span>
      </div>
      <ul>
        <li>
         <a href="#"> <i class="mdi mdi-alert-octagon"></i><span>403</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-alert-octagon"></i><span>404</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-alert-octagon"></i><span>405</span> </a>
        </li>
        <li>
         <a href="#"> <i class="mdi mdi-alert-octagon"></i><span> 500 </span> </a>
        </li>
      </ul>
    </li>
  </ul>
`;