
/* Address: 0x18000424c; Evidence: ev_c8957169391eea58a929b256048636fa4a404342518757b2aa82433f066318f7 */

/* Library Function - Single Match
    public: __cdecl std::exception::exception(class std::exception const & __ptr64) __ptr64
   
   Library: Visual Studio 2019 Release */

exception * __thiscall std::exception::exception(exception *this,exception *param_1)

{
  *(undefined ***)this = vftable;
  *(longlong *)(this + 8) = 0;
  *(undefined8 *)(this + 0x10) = 0;
  FUN_1800049d0((longlong *)(param_1 + 8),(longlong *)(this + 8));
  return this;
}

