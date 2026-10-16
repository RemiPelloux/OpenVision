
/* Address: 0x18000a070; Evidence: ev_728b895922bc14ffed2b120c9e80bb56f3225d514c4d158b050dce63795346c1 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_18000b8bc((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

