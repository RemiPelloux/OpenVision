
/* Address: 0x18001316c; Evidence: ev_bb6ab8b8f86cf8ae0ed9a06998c33bc9a230c6cf44969585b070a2bccdc65455 */

void FUN_18001316c(uint param_1,uint param_2,LPCWSTR param_3,int param_4,LPSTR param_5,int param_6,
                  LPBOOL param_7,LPBOOL param_8)

{
  LPBOOL lpUsedDefaultChar;
  int iVar1;
  DWORD dwFlags;
  LPBOOL pBVar2;
  bool bVar3;
  
  pBVar2 = (LPBOOL)0x0;
  dwFlags = 0;
  if (param_1 < 0xdead) {
    if (param_1 == 0xdeac) goto LAB_18001320c;
    if (0xc433 < param_1) {
      if ((param_1 == 0xc435) || (param_1 == 0xd698)) goto LAB_18001320c;
      iVar1 = param_1 - 0xdeaa;
      goto LAB_1800131fd;
    }
    if ((((param_1 == 0xc433) || (param_1 == 0x2a)) || (param_1 == 0xc42c)) ||
       ((param_1 == 0xc42d || (param_1 == 0xc42e)))) goto LAB_18001320c;
    bVar3 = param_1 == 0xc431;
  }
  else {
    if (((((param_1 == 0xdead) || (param_1 == 0xdeae)) || (param_1 == 0xdeaf)) ||
        ((param_1 == 0xdeb0 || (param_1 == 0xdeb1)))) ||
       ((param_1 == 0xdeb2 || (param_1 == 0xdeb3)))) goto LAB_18001320c;
    iVar1 = param_1 - 65000;
LAB_1800131fd:
    if (iVar1 == 0) goto LAB_18001320c;
    bVar3 = iVar1 == 1;
  }
  if (!bVar3) {
    dwFlags = param_2 & 0xffffff7f;
  }
LAB_18001320c:
  lpUsedDefaultChar = param_8;
  if ((param_1 - 65000 < 2) &&
     (param_7 = pBVar2, lpUsedDefaultChar = pBVar2, param_8 != (LPBOOL)0x0)) {
    *param_8 = 0;
  }
                    /* WARNING: Could not recover jumptable at 0x000180013243. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  WideCharToMultiByte(param_1,dwFlags,param_3,param_4,param_5,param_6,(LPCSTR)param_7,
                      lpUsedDefaultChar);
  return;
}

