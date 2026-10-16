
/* Address: 0x18000e5e4; Evidence: ev_e5628abbd36c12f76c14883b5f97f38d589dea83da37bb15ae2f8b0e90005e6e */

/* Library Function - Single Match
    _fileno
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

int __cdecl _fileno(FILE *_File)

{
  int iVar1;
  __acrt_ptd *p_Var2;
  
  if (_File == (FILE *)0x0) {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
    iVar1 = -1;
  }
  else {
    iVar1 = _File->_flag;
  }
  return iVar1;
}

