
/* Address: 0x180003f8c; Evidence: ev_9559f981771764929d96bda818194e81e3ce306740ac4dc80a71b3c93fa4286a */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180004710((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

