
/* Address: 0x1800040ac; Evidence: ev_b618ce00db08933eaf0b59e34fcc9c86d4c5d4e2ab5f98f6927b25dffa66cd75 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180004830((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

