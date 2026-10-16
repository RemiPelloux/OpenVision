
/* Address: 0x180009a8c; Evidence: ev_3eccc445d8072842cd82d8e9cd9169c3b8fae089918b6ef23272aebaf83f54b5 */

/* Library Function - Single Match
    _onexit
   
   Library: Visual Studio 2019 Release */

_onexit_t __cdecl _onexit(_onexit_t _Func)

{
  int iVar1;
  _onexit_t p_Var2;
  
  if (DAT_180028d30 == -1) {
    iVar1 = FUN_1800107f4(_Func);
  }
  else {
    iVar1 = _register_onexit_function(&DAT_180028d30,_Func);
  }
  p_Var2 = (_onexit_t)0x0;
  if (iVar1 == 0) {
    p_Var2 = _Func;
  }
  return p_Var2;
}

