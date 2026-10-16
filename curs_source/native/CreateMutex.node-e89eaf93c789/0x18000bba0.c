
/* Address: 0x18000bba0; Evidence: ev_a2bd79688b1ae34a1110d7a0ec2e3da45f70e1f7b5385cb518e35a0996483600 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180023428) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

