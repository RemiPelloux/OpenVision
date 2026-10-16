
/* Address: 0x180001050; Evidence: ev_d68564497a16df62b3196db1e1bd89277f4b248fdbdda72e861bde75ca426a1e */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180006b78((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

