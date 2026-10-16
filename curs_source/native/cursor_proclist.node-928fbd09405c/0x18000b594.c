
/* Address: 0x18000b594; Evidence: ev_0858657043dc409c5d4a80d1d589698b5c302a510aa5dfbcb6eaa947a26c5a33 */

/* Library Function - Single Match
    __AdjustPointer
   
   Library: Visual Studio */

longlong __AdjustPointer(longlong param_1,int *param_2)

{
  longlong lVar1;
  
  lVar1 = *param_2 + param_1;
  if (-1 < param_2[1]) {
    lVar1 = lVar1 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(param_2[1] + param_1)) +
                    (longlong)param_2[1];
  }
  return lVar1;
}

