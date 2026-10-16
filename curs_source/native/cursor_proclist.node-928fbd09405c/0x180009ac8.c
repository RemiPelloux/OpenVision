
/* Address: 0x180009ac8; Evidence: ev_c91f1a282415badabb0dbad9777b02775caf0df515dac43cd79d01aaf5bb44f7 */

/* Library Function - Single Match
    atexit
   
   Library: Visual Studio 2019 Release */

int __cdecl atexit(_func_5014 *param_1)

{
  _onexit_t p_Var1;
  
  p_Var1 = _onexit((_onexit_t)param_1);
  return (p_Var1 != (_onexit_t)0x0) - 1;
}

