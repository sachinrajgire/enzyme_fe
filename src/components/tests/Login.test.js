import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import Login from '../Login';
// import {expect} from 'chai' ;

// expect 2 labels (one should have name of Username , Password )
//expect 2 input fields to exist on page 
// when you type , password should be hidden
//
// expect a button and text inside should be submit 


describe('Testing Login Component', () => {
      describe('Testing Labels in Login Component', () => {


    
    it('is expecting label called Username', () => {
      const wrapper = shallow(<Login />);

    //   console.log(wrapper.debug() ,'DEBUGGER ');w
    //  console.log(wrapper.find('#label_Username').debug())
     let label = wrapper.find('#label_Username')
    //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
    expect(label.text()).toBe('Username')
    
    })

    it('is expecting label called password', () => {
      const wrapper = shallow(<Login />);
     let label = wrapper.find('label').last().text()
     console.log(label,'label');
    //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
    expect(label).toBe('Password')

    })
    it('is expecting label called Mylabel', () => {
      const wrapper = shallow(<Login />);
     let label = wrapper.find('label').at(1).text()
     console.log(label,'label');
    //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
    expect(label).toBe('Mylabel')

    })
    it('is expecting label using get ', () => {
      const wrapper = shallow(<Login />);
     let label = wrapper.find('label').get(1)
    //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
    expect(label.props.children).toBe('Mylabel')

    })

})
describe('Testing Input Fields in Login Component', () => {
    it('should have 2 input fields ', () => {
        const wrapper = shallow(<Login />);
        let wrap = wrapper.find('input')
        // console.log(wrap);
        expect(wrap).toHaveLength(2)
        // length 
  
      })

    it('when clicked on submit , alert should pop up  ', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('#submit').simulate('click',{preventDefault:()=>{}})
        // console.log(wrap);
        let isSub = wrapper.find('#isSubmitted')
        expect(isSub.text()).toBe("TRUE")
        // length 
      })

    it('should get the prop', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('#submit').simulate('click',{preventDefault:()=>{}})
        // console.log(wrap);
        let isSub = wrapper.find('#isSubmitted')
        expect(isSub.text()).toBe("TRUE")
        // length 
      })


    it('should get the prop', () => {

beforeEach(()=>{
    
})


        const wrapper = shallow(<Login />);
        wrapper.setState({
            is
        })
        wrapper.setProps({})
        // wrapper.find('#submit').simulate('click',{preventDefault:()=>{}})
        // // console.log(wrap);
        // let isSub = wrapper.find('#isSubmitted')
        // expect(isSub.text()).toBe("TRUE")
        // length 
      })
      
    //   it('is expecting to have Alert on submit', ()=>{
    //     const wrapper = shallow(<Login/>);
    //     window.alert = jest.fn()
    //     wrapper.find('button').simulate('click')
    //     expect(window.alert).toHaveBeenCalledWith('form submitted')
    // })




  })
})




