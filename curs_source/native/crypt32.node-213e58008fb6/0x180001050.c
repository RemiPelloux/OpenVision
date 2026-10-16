
/* Address: 0x180001050; Evidence: ev_6f488e336d7977b2737700e5ce9a36fcaef4baf3ff11aaa1a8289f0938e4b39b */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_1800068f8((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

