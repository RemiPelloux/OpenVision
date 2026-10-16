
/* Address: 0x180004980; Evidence: ev_3fc34b2d472b5ce2414bbcbaeae2dd434a71361b9efa01ef49d7e440524a0fb4 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180005634((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

