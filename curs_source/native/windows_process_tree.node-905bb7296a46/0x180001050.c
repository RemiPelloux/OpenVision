
/* Address: 0x180001050; Evidence: ev_d802cf91143f4f15fda762ce5f254818aa12f5455f159bd05b7f31b6cb8ed377 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_180007f48((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

