
/* Address: 0x18000e854; Evidence: ev_362143e4849d93afbac07c7f58b23cbe725324bfcc83cdf6d58b524377d5d735 */

uint FUN_18000e854(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

