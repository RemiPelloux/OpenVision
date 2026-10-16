
/* Address: 0x180002748; Evidence: ev_7de9b5a5297fb21faed5f7c3e1211949dfdefa52b278c5f4a2696cbbcb654f85 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180003404((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

